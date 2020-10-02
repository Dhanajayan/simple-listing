import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import './App.css';

import { 
  AutoSizer,
  Column,
  Table,
  CellMeasurer,
  CellMeasurerCache
 } from 'react-virtualized';

function App(props) {
  const _cache = new CellMeasurerCache({
    fixedWidth: true,
    defaultHeight: 50,
    minHeight: 40
  });
  const [items, setItems] = useState([])
  let _lastRenderedWidth = props.width;
  let width = props.width;

  useEffect(() => {
    (async () => {
      const result = await axios.get("http://localhost:8080/data");
      setItems(result.data);
    })();


    if (_lastRenderedWidth !== props.width) {
      _lastRenderedWidth = props.width;
      _cache.clearAll();
    }

  }, [width]);

  const _columnCellRenderer = ({ dataKey, parent, rowIndex }) => {
    const datum = items[rowIndex % items.length];
    const content = datum[dataKey] === null ? '': datum[dataKey].toString() ;
    return (
      <CellMeasurer
        cache={_cache}
        columnIndex={0}
        key={dataKey}
        parent={parent}
        rowIndex={rowIndex}
      >
        {content}
      </CellMeasurer>
    );
  };

  const _rowGetter = ({ index }) => {
    return items[index % items.length];
  };

  return (
    <div className="App" style={{width: "100%", height: "100vh"}}>
      <AutoSizer>
        {({height, width}) => (
            <Table
              deferredMeasurementCache={_cache}
               rowClassName='table-row'
               headerHeight={40}
               width={width}
               height={height}
               rowHeight={_cache.rowHeight}
               rowCount={items.length}
               rowGetter={_rowGetter}
            >
            <Column
               label='Id'
               dataKey='id'
               width={100}
               cellRenderer={_columnCellRenderer}
            />
            <Column
               label='Name'
               dataKey='name'
               width={300}
               cellRenderer={_columnCellRenderer}
            />
            <Column
               label='Status'
               dataKey='organization'
               width={300}
               cellRenderer={_columnCellRenderer}
            />
             <Column
               label='Group'
               dataKey='group'
               width={300}
               cellRenderer={_columnCellRenderer}
            />
            <Column
               label='Contact By'
               dataKey='contact_by'
               width={300}
               cellRenderer={_columnCellRenderer}
            />
            <Column
               label='Channel'
               dataKey='channel'
               width={300}
               cellRenderer={_columnCellRenderer}
            />
            <Column
               label='Address'
               dataKey='address'
               width={300}
               cellRenderer={_columnCellRenderer}
            />
            <Column
               label='Created'
               dataKey='created'
               width={300}
               cellRenderer={_columnCellRenderer}
            />
            <Column
               label='Last Order'
               dataKey='last_order'
               width={300}
               cellRenderer={_columnCellRenderer}
            />
            <Column
               label='Orders'
               dataKey='orders'
               width={300}
               cellRenderer={_columnCellRenderer}
            />
            <Column
               label='Spend'
               dataKey='spend'
               width={300}
               cellRenderer={_columnCellRenderer}
            />
            <Column
               label='Owing'
               dataKey='owing'
               width={300}
               cellRenderer={_columnCellRenderer}
            />
         </Table>
           )}
        </AutoSizer>
    </div>
  );
}

export default App;
