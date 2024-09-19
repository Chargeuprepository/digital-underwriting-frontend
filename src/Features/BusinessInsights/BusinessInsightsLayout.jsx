import Row1Layout from './Row1/Row1Layout';
import Row2Layout from './Row2/Row2Layout';
import Row3Layout from './Row3/Row3Layout';
import Row4Layout from './Row4/Row4Layout';
import Row5Layout from './Row5/Row5Layout';
import GridMaker from '../../UI/GridMaker';

export default function BusinessInsightsLayout() {
  return (
    <GridMaker row="6rem repeat(4, 1fr)" gap="1rem">
      <Row1Layout />
      <Row2Layout />
      <Row5Layout />
      <Row3Layout />
      <Row4Layout />
    </GridMaker>
  );
}
