export const addStockAsset = (ticker, ownerId, amount, price) => {
  return $.ajax({
    url: '/api/stock_assets',
    method: 'POST',
    data: { stock_asset: { ticker, owner_id: ownerId, amount, price } }
  })
}

export const updateStockAsset = (amount, assetId) => {
  // console.log(amount)
  return $.ajax({
    url: `/api/stock_assets/${assetId}`,
    method: 'PATCH',
    // data: { stock_asset: { amount: amount } }
    data: { amount }
  })
}

export const deleteStockAsset = (ownerId, assetId) => {
  return $.ajax({
    url: `/api/stock_assets/${assetId}`,
    method: 'DELETE',
    data: { stock_asset: {owner_id: ownerId } }
  })
}


export const addWatchedAsset = (ticker, watcherId, price, category, emoji) => {
  return $.ajax({
    url: '/api/watched_assets',
    method: 'POST',
    data: { watched_asset: {ticker, watcher_id: watcherId, price, category, emoji} }
  })
}

export const updateWatchedAsset = (emoji, category, watchedAssetId) => {
  // console.log(emoji)
  // console.log(category)
  // console.log(watchedAssetId)
  return $.ajax({
    url: `/api/watched_assets/${watchedAssetId}`,
    method: 'PATCH',
    // data: { watched_asset: {emoji, category}}
    data: { emoji, category }
  })
}

export const deleteWatchedAsset = (watcherId, assetId) => {
  return $.ajax({
    url: `/api/watched_assets/${assetId}`,
    method: 'DELETE',
    data: { watched_asset: {watcher_id: watcherId}}
  })
}