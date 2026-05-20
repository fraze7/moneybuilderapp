const fmt = (n) =>
  n.toLocaleString('en-GB', { style: 'currency', currency: 'GBP', maximumFractionDigits: 0 });

export default function BreakdownTable({ rows }) {
  return (
    <>
      <h2 style={styles.title}>Year-by-Year Breakdown</h2>
      <div style={styles.wrap}>
        <table style={styles.table}>
          <thead>
            <tr>
              {['Year', 'Balance', 'Total Invested', 'Interest Earned'].map((h) => (
                <th key={h} style={styles.th}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={row.year} style={{ background: i % 2 === 0 ? '#f9fafb' : '#fff' }}>
                <td style={styles.td}>{row.year}</td>
                <td style={{ ...styles.td, color: '#16a34a', fontWeight: 600 }}>{fmt(row.balance)}</td>
                <td style={styles.td}>{fmt(row.totalInvested)}</td>
                <td style={{ ...styles.td, color: '#2563eb' }}>{fmt(row.interest)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

const styles = {
  title: {
    fontSize: 18,
    fontWeight: 700,
    color: '#0f172a',
    margin: '0 0 16px',
  },
  wrap: {
    overflowX: 'auto',
    borderRadius: 10,
    border: '1px solid #e5e7eb',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    fontSize: 14,
  },
  th: {
    padding: '12px 16px',
    textAlign: 'left',
    fontWeight: 600,
    color: '#6b7280',
    background: '#f9fafb',
    borderBottom: '1px solid #e5e7eb',
  },
  td: {
    padding: '12px 16px',
    color: '#374151',
    borderBottom: '1px solid #f1f5f9',
  },
};
