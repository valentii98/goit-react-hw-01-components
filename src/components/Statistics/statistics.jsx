import { createColor } from 'components/GlobalStyle';

export const Statistics = ({ title, stats}) => {
  return (
    <section>
      {title && <h2>{title}</h2>}

      <ul>
        {stats.map(({ id, label, percentage }) => {
          return (
            <li key={id} style={{ backgroundColor: createColor() }}>
              <span>{label}</span>
              <span>{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
