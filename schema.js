const {
  File,
  Text,
  Slug,
  Relationship,
  Select,
  Password,
  Checkbox,
  DateTime,
  Integer,
} = require('@keystonejs/fields');
const { Wysiwyg } = require('@keystonejs/fields-wysiwyg-tinymce');
const { userIsAdmin, userIsAdminOrOwner } = require('./utils/access');
const { LocalFileAdapter, CloudinaryAdapter } = require('@keystonejs/file-adapters');
const KeystoneCloudinaryGallery = require('@globobeet/keystone-cloudinary-gallery-field');
const { CloudinaryImage } = require('@keystonejs/fields');
const { distDir, staticRoute, staticPath } = require('./config');
const dev = process.env.NODE_ENV === 'development';

const avatarFileAdapter = new LocalFileAdapter({
  src: `${staticPath}/avatars`,
  path: `${staticRoute}/avatars`,
});

const cloudadapter = new CloudinaryAdapter({
  cloudName: 'dpiuthi6q',
  apiKey: '195655714938893',
  apiSecret: 'ciavXR0Z0wCiXkhFRAeOAyDewYM',
  folder: 'my-keystone-app',
});

const postImageFileAdapter = new LocalFileAdapter({
  src: `${dev ? '' : `${distDir}/`}${staticPath}/uploads`,
  path: `${staticRoute}/uploads`,
});

const fileAdapter = new LocalFileAdapter({
  src: `${dev ? '' : `${distDir}/`}${staticPath}/files`,
  path: `${staticRoute}/files`,
});

const User = {
  fields: {
    name: { type: Text },
    email: {
      type: Text,
      isUnique: true,
    },
    organization: { type: Text },
    isAdmin: { type: Checkbox },
    password: {
      type: Password,
    },
    avatar: { type: File, adapter: avatarFileAdapter },
  },
  access: {
    read: userIsAdminOrOwner,
    update: userIsAdminOrOwner,
    create: userIsAdmin,
    delete: userIsAdmin,
    auth: true,
  },
  labelResolver: (item) => `${item.name} <${item.email}>`,
};

const ItemService = {
  fields: {
    name: { type: Text },
    image: {
      type: File,
      adapter: fileAdapter,
      hooks: {
        beforeChange: async ({ existingItem }) => {
          if (existingItem && existingItem.image) {
            await fileAdapter.delete(existingItem.image);
          }
        },
      },
    },
    pricevalue: { type: Integer },
    categories: {
      type: Relationship,
      ref: 'ItemServiceCategory',
      many: false,
      isRequired: true,
    },
    description: { type: Wysiwyg },
  },
};

const ItemServiceCategory = {
  fields: {
    name: { type: Text },
    slug: { type: Slug, from: 'name', isUnique: true },
    description: { type: Wysiwyg },
  },
};

const ItemCar = {
  fields: {
    name: { type: Text },
    photos: {
      type: CloudinaryImage,
      adapter: cloudadapter,
    },

    pricevalue: { type: Integer },
    categories: {
      type: Relationship,
      ref: 'ItemCarCategory',
    },
    chassis: { type: Text, label: 'Шасси' },
    status: {
      type: Select,
      defaultValue: 'draft',
      options: [
        { label: 'Draft', value: 'draft' },
        { label: 'Published', value: 'published' },
      ],
    },
    isEnabled: { type: Checkbox, isRequired: true, label: 'В наличии' },
    description: { type: Wysiwyg },
    netweight: { type: Text },
    engine: { type: Text },
  },
  adminConfig: {
    defaultPageSize: 20,
    defaultColumns: 'name, categories, status',
    defaultSort: 'name',
  },
};

const ItemCarCategory = {
  fields: {
    name: { type: Text },
    slug: { type: Slug, from: 'name', isUnique: true },
    description: { type: Wysiwyg },
  },
};

const ItemPrice = {
  fields: {
    name: { type: Text },
    sku: { type: Integer },
    art: { type: Text },
    pricevalue: { type: Integer },
    categories: {
      type: Relationship,
      ref: 'ItemCategory',
      isRequired: true,
    },
    status: {
      type: Select,
      defaultValue: 'draft',
      options: [
        { label: 'Draft', value: 'draft' },
        { label: 'Published', value: 'published' },
      ],
    },
  },
  adminConfig: {
    defaultPageSize: 20,
    defaultColumns: 'name, art, pricevalue',
    defaultSort: 'name',
  },
  labelResolver: (item) => item.name,
};

const ItemCategory = {
  fields: {
    name: { type: Text },
    slug: { type: Slug, from: 'name', isUnique: true },
    description: { type: Text, isMultiline: true },
  },
};

const Post = {
  fields: {
    title: { type: Text, isRequired: true },
    slug: { type: Slug, from: 'title', isUnique: true },
    author: {
      type: Relationship,
      ref: 'User',
      isRequired: true,
    },
    postCategories: {
      type: Relationship,
      ref: 'PostCategory',
      many: true,
      isRequired: true,
    },
    status: {
      type: Select,
      defaultValue: 'draft',
      options: [
        { label: 'Draft', value: 'draft' },
        { label: 'Published', value: 'published' },
      ],
    },
    publishedDate: {
      type: DateTime,
      format: 'DD/MM/YYYY',
    },
    image: {
      type: File,
      adapter: postImageFileAdapter,
      isRequired: true,
      hooks: {
        beforeChange: async ({ existingItem }) => {
          if (existingItem && existingItem.image) {
            await postImageFileAdapter.delete(existingItem.image);
          }
        },
      },
    },
    description: {
      type: Text,
      isMultiline: true,
      isRequired: true,
    },
    content: {
      type: Wysiwyg,
    },
  },
  hooks: {
    afterDelete: async ({ existingItem }) => {
      if (existingItem.image) {
        postImageFileAdapter.delete(existingItem.image);
      }
    },
  },
  adminConfig: {
    defaultPageSize: 20,
    defaultColumns: 'title, status, author',
    defaultSort: 'title',
  },
  labelResolver: (item) => item.title,
};

const PostCategory = {
  fields: {
    name: { type: Text, isRequired: true },
    slug: { type: Slug, from: 'name', isUnique: true },
    description: { type: Text, isMultiline: true },
  },
};

const Contact = {
  fields: {
    name: { type: Text },
    email: { type: Text, isRequired: true },
    description: { type: Text, isMultiline: true },
  },
  access: {
    read: userIsAdmin,
    update: userIsAdmin,
    create: true,
    delete: userIsAdmin,
  },
};

module.exports = {
  User,
  Post,
  PostCategory,
  Contact,
  ItemCategory,
  ItemPrice,
  ItemCar,
  ItemCarCategory,
  ItemService,
  ItemServiceCategory,
};
