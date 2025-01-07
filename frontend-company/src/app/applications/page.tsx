import React from 'react';
import axios from 'axios';
import { Application } from '@/types/application';

const ApplicationsPage = async () => {
  const fetchApplications = async (): Promise<Application[]> => {
    try {
      const response = await axios.get<Application[]>('http://backend:3000/applications', {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching applications:', error);
      throw new Error('Failed to fetch applications.');
    }
  };

  let applications: Application[] = [];
  let errorMessage: string | null = null;

  try {
    applications = await fetchApplications();
  } catch (error) {
    errorMessage = (error as Error).message;
  }

  if (errorMessage) {
    return <div className="p-12 text-red-500">{errorMessage}</div>;
  }

  return (
    <div className="p-12">
      <h1 className="font-bold text-2xl mb-4">応募者一覧</h1>
      {applications.length === 0 ? (
        <p>No applications found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">ID</th>
                <th className="py-2 px-4 border-b">User</th>
                <th className="py-2 px-4 border-b">Recruitment</th>
                <th className="py-2 px-4 border-b">Intern</th>
                <th className="py-2 px-4 border-b">Created At</th>
                <th className="py-2 px-4 border-b">Updated At</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((app) => (
                <tr key={app.id} className="hover:bg-gray-100">
                  <td className="py-2 px-4 border-b">{app.id}</td>
                  <td className="py-2 px-4 border-b">{app.user.name || 'N/A'}</td>
                  <td className="py-2 px-4 border-b">{app.recruitment.title}</td>
                  <td className="py-2 px-4 border-b">{app.intern.nickname}</td>
                  <td className="py-2 px-4 border-b">
                    {new Date(app.created_at).toLocaleString()}
                  </td>
                  <td className="py-2 px-4 border-b">
                    {new Date(app.updated_at).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ApplicationsPage;
