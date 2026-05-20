import { useState, useMemo } from 'react';
import InputField from './components/InputField';
import ResultCard from './components/ResultCard';
import FrequencySelector from './components/FrequencySelector';
import BreakdownTable from './components/BreakdownTable';

export default function App() {
  const [principal, setPrincipal] = useState(10000);
  const [monthly, setMonthly] = useState(500);
  const [rate, setRate] = useState(7);
  const [years, setYears] = useState(10);
  const [freq, setFreq] = useState(12);

  const { finalBalance, totalContributions, totalInterest, breakdown } = useMemo(() => {
    const r = rate / 100 / freq;
    let balance = principal;
    const contribPerPeriod = monthly * (12 / freq);
    const rows = [];

    for (let i = 1; i <= years; i++) {
      for (let p = 0; p < freq; p++) {
        balance = balance * (1 + r) + contribPerPeriod;
      }
      const totalInvested = principal + monthly * 12 * i;
      rows.push({ year: i, balance, totalInvested, interest: balance - totalInvested });
    }

    const totalContributions = principal + monthly * 12 * years;
    return { finalBalance: balance, totalContributions, totalInterest: balance - totalContributions, breakdown: rows };
  }, [principal, monthly, rate, years, freq]);

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.title}>Investment Calculator</h1>

        <div style={styles.grid}>
          <InputField label="Initial Investment" value={principal} onChange={setPrincipal} min={0} prefix="£" />
          <InputField label="Monthly Contribution" value={monthly} onChange={setMonthly} min={0} prefix="£" />
          <InputField label="Annual Return Rate" value={rate} onChange={setRate} min={0} max={100} step={0.1} suffix="%" />
          <InputField label="Time Period" value={years} onChange={setYears} min={1} max={50} suffix="yrs" />
          <FrequencySelector value={freq} onChange={setFreq} />
        </div>

        <div style={styles.results}>
          <ResultCard label="Final Balance" value={finalBalance} color="#16a34a" />
          <ResultCard label="Total Invested" value={totalContributions} />
          <ResultCard label="Interest Earned" value={totalInterest} color="#2563eb" />
        </div>

        <BreakdownTable rows={breakdown} />
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: '100vh',
    background: '#f1f5f9',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: '40px 16px',
    fontFamily: 'system-ui, sans-serif',
  },
  card: {
    background: '#fff',
    borderRadius: 16,
    boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
    padding: '40px 36px',
    width: '100%',
    maxWidth: 680,
  },
  title: {
    margin: '0 0 28px',
    fontSize: 28,
    fontWeight: 700,
    color: '#0f172a',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '20px 24px',
    marginBottom: 28,
  },
  results: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 16,
    marginBottom: 32,
  },
};
