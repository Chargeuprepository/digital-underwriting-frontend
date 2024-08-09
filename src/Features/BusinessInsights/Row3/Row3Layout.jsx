import BarVerti1Row3 from './Components/BarVerti-1Row3';
import DonutRow3 from './Components/DonutRow3';
import RowLayoutBusiInsights from '../Charts/RowLayoutBusi-Insights';
import SocialMedia from './Components/SocialMedia';

export default function Row3Layout() {
  return (
    <RowLayoutBusiInsights row="3">
      <BarVerti1Row3 />
      <DonutRow3 />
      <SocialMedia />
    </RowLayoutBusiInsights>
  );
}
