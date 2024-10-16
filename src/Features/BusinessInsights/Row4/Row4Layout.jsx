import RowLayoutBusiInsights from '../BIUI/RowLayoutBusi-Insights';
import SocialMedia from './Components/SocialMedia';
import BarVerti1Row4 from './Components/BarVerti-1Row4';
import DonutRow4 from './Components/DonutRow4';

export default function Row3Layout() {
  return (
    <RowLayoutBusiInsights row="4" backgroundcolor={'var(--color-gray-10)'}>
      <BarVerti1Row4 />
      <DonutRow4 />
      <SocialMedia />
    </RowLayoutBusiInsights>
  );
}
