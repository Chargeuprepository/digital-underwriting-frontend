import 'overlayscrollbars/overlayscrollbars.css';

import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';

export default function Testing() {
  return (
    <div style={{ height: '20px' }}>
      <OverlayScrollbarsComponent>
        <div>List 1</div>
        <div>List 2</div>
        <div>List 3</div>
        <div>List 4</div>
        <div>List 5</div>
        <div>List 1</div>
        <div>List 2</div>
        <div>List 3</div>
        <div>List 4</div>
        <div>List 5</div>
      </OverlayScrollbarsComponent>
    </div>
  );
}
