import { Intern } from '../types/Intern';

async function getInterns(): Promise<Intern[]> {
  const res = await fetch("http://localhost:3000/interns", {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch interns. Status: ${res.status}`);
  }

  const interns = (await res.json()) as Intern[];
  return interns;
}

// サーバーコンポーネント
export default async function InternsPage() {
  let interns: Intern[] = [];

  try {
    interns = await getInterns();
  } catch (error) {
    // Rails 側が 404 を返したときなど
    console.error(error);
    // ここで notFound() を呼び出して 404 ページに飛ばす といった対応も可能
    // throw notFound();
  }

  if (interns.length === 0) {
    // interns が空配列の場合
    return <div>No interns found</div>;
  }

  return (
    <div style={{ padding: '1rem' }}>
      <h1>Interns List</h1>
      {interns.map((intern) => (
        <div key={intern.id} style={{ border: '1px solid #ddd', margin: '8px', padding: '8px' }}>
          <p><strong>Nickname:</strong> {intern.nickname}</p>
          <p><strong>Department:</strong> {intern.department}</p>
          <p><strong>Grade:</strong> {intern.grade}</p>
          <p><strong>Company Name:</strong> {intern.company_name}</p>
          <p><strong>Overview:</strong> {intern.intern_overview}</p>
          <p><strong>Catchphrase:</strong> {intern.catchphrase}</p>
          <p><strong>Hourly Wage:</strong> {intern.hourly_wage}</p>
          <p><strong>Weekly Hours:</strong> {intern.weekly_hours}</p>
          <p><strong>Work Duration:</strong> {intern.work_duration}</p>
          <p><strong>Industry:</strong> {intern.industry}</p>
        </div>
      ))}
    </div>
  );
}