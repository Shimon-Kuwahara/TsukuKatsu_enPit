"use client"
import React from 'react'
import { useEffect, useState } from 'react';

interface User {
  id: number;
  name: string | null;
  nickname: string | null;
  image: string | null;
  email: string;
  last_name: string;
  first_name: string;
  last_name_kana: string;
  first_name_kana: string;
  gender: string;
  university: string;
  department: string;
  grade: string;
  graduation_year: number;
  graduation_month: string;
  postal_code: string | null;
  prefecture_id: number | null;
  city: string | null;
  phone_number: string | null;
  birth_place: string | null;
  nationality: string | null;
  birth_date: string | null;
  achievement: string | null;
  experience: string | null;
  github: string | null;
  portfolio: string | null;
  qualification: string | null;
  desired_workplace: string | null;
  desired_company_size: string | null;
  desired_job: string | null;
}

export default function Students() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}users`); // Adjust the URL if needed
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {users.map(user => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <p>Email: {user.email}</p>
          <p>Nickname: {user.nickname}</p>
          <p>Image: {user.image}</p>
          <p>Last Name: {user.last_name}</p>
          <p>First Name: {user.first_name}</p>
          <p>Last Name Kana: {user.last_name_kana}</p>
          <p>First Name Kana: {user.first_name_kana}</p>
          <p>Gender: {user.gender}</p>
          <p>University: {user.university}</p>
          <p>Department: {user.department}</p>
          <p>Grade: {user.grade}</p>
          <p>Graduation Year: {user.graduation_year}</p>
          <p>Graduation Month: {user.graduation_month}</p>
          <p>Postal Code: {user.postal_code}</p>
          <p>Prefecture ID: {user.prefecture_id}</p>
          <p>City: {user.city}</p>
          <p>Phone Number: {user.phone_number}</p>
          <p>Birth Place: {user.birth_place}</p>
          <p>Nationality: {user.nationality}</p>
          <p>Birth Date: {user.birth_date}</p>
          <p>Achievement: {user.achievement}</p>
          <p>Experience: {user.experience}</p>
          <p>GitHub: {user.github}</p>
          <p>Portfolio: {user.portfolio}</p>
          <p>Qualification: {user.qualification}</p>
          <p>Desired Workplace: {user.desired_workplace}</p>
          <p>Desired Company Size: {user.desired_company_size}</p>
          <p>Desired Job: {user.desired_job}</p>
        </div>
      ))}
    </div>
  );
}
