import React from 'react';
import MUIDataTable from 'mui-datatables';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const getMuiTheme = () =>
  createMuiTheme({
    overrides: {
      MuiPaper: {
        root: {
          backgroundColor: '#fafafa',
        },
      },
      MUIDataTable: {
        root: {},
      },
      MuiTablePagination: {
        root: {
          border: 'none',

          '& > :last-child': {
            margin: '1rem 0',
          },
        },
      },
    },
  });

const useStyles = makeStyles({
  muidt: {
    '& > div:nth-child(3)': {
      boxShadow:
        '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
    },
  },
});

function Tabll(data) {
  const columns = [
    {
      name: 'name',
      label: 'Наименование',
      options: {
        filter: true,
      },
    },
    {
      name: 'art',
      label: 'Артикул',
      options: {
        filter: true,
      },
    },
    {
      name: 'pricevalue',
      label: 'Цена',
      options: {
        filter: false,
      },
    },
    {
      name: 'order',
      label: 'Заказать',
      options: {
        filter: false,
        sort: false,
      },
    },
  ];

  const options = {
    filter: false,
    filterType: 'dropdown',
    responsive: 'standard',
    rowsPerPage: 50,
    selectableRows: 'none',
    rowsPerPageOptions: [10, 25, 50, 100],
    viewColumns: false,
    elevation: 0,
    searchOpen: true,
    searchPlaceholder: 'Искать по артикулу/названию',
    textLabels: {
      body: {
        noMatch: 'Извините, но мы ничего не нашли',
        toolTip: 'Сортировать',
        columnHeaderTooltip: (column) => `Сортировать по ${column.label}`,
      },
      pagination: {
        next: 'Следующая страница',
        previous: 'Предидущая страница',
        rowsPerPage: 'Количество строк на странице:',
        displayRows: 'of',
      },
      toolbar: {
        search: 'Поиск',
        downloadCsv: 'Скачать CSV',
        print: 'На печать',
        viewColumns: 'Выбор колонок',
        filterTable: 'Фильтр таблицы',
      },
      filter: {
        all: 'All',
        title: 'FILTERS',
        reset: 'RESET',
      },
      viewColumns: {
        title: 'Show Columns',
        titleAria: 'Show/Hide Table Columns',
      },
      selectedRows: {
        text: 'строк выбрано',
        delete: 'Удалить',
        deleteAria: 'Удалить выбранные строки',
      },
    },
  };
  const classes = useStyles();
  return (
    <ThemeProvider theme={getMuiTheme}>
      <MUIDataTable title={''} data={data.data} columns={columns} options={options} className={classes.muidt} />
    </ThemeProvider>
  );
}

export default Tabll;
