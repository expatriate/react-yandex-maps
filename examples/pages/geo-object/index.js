import React from 'react';

import md from '../../components/md';
import Page from '../../components/Page';

const Example = () => (
  <Page>
    {md`
# GeoObject

~~~react-live
const UsingGeoObject = () => (
  <YMaps>
    <Map
      style={{ width: 320, height: 240 }}
      defaultState={{
        center: [55.76, 37.64],
        zoom: 7,
      }}
    >
      <GeoObject />
    </Map>
  </YMaps>
);

render(<UsingGeoObject />);
~~~
    `}
  </Page>
);

export default Example;
