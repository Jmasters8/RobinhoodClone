import * as StockAPIUtil from '../util/stock_api_util'

export const RECEIVE_STOCK = 'RECEIVE_STOCK';
export const RECEIVE_STOCK_DATA = "RECEIVE_STOCK_DATA"
export const RECEIVE_STOCK_NEWS = 'RECEIVE_STOCK_NEWS'

export const receiveStock = (stock, symbol) => ({
  type: RECEIVE_STOCK,
  stock, 
  symbol
});

export const receiveStockData = (data, symbol) => ({
  type: RECEIVE_STOCK_DATA,
  data,
  symbol
});

export const receiveStockNews = (news, symbol) => ({
  type: RECEIVE_STOCK_NEWS,
  news,
  symbol
})


export const fetchStock = symbol => dispatch => (
  StockAPIUtil.fetchStock(symbol).then((stock) => (dispatch(receiveStock(stock, symbol))))
);

export const fetchStockInfo = symbol => dispatch => (
  StockAPIUtil.fetchStockInfo(symbol).then((stock) => dispatch(receiveStock(stock, symbol)))
);

// export const fetchStockInfoTest = symbol => dispatch => (
//   StockAPIUtil.fetchStockInfoTest(symbol).then((stock) => dispatch(receiveStock(stock, symbol)))
// );

export const fetchStockData = (symbol, start, end) => dispatch => (
  StockAPIUtil.fetchStockData(symbol, start, end).then((stock) => dispatch(receiveStockData(stock, symbol)))
);

export const fetchStockNews = (symbol, start, end) => dispatch => (
  StockAPIUtil.fetchStockNews(symbol, start, end).then((stock) => dispatch(receiveStockNews(stock, symbol)))
)