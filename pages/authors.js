import React, { useEffect, useState } from 'react';
import { getAuthors } from '../api/authorData';
import AuthorCard from '../components/AuthorCard';
import { useAuth } from '../utils/context/authContext';

export default function ShowAuthors() {
  const [authors, setAuthors] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    getAuthors(user.uid).then(setAuthors);
  }, [user.uid]);

  return (
    <div>{authors.map((author) => (
      <AuthorCard key={author.firebaseKey} authorObj={author} />
    ))}
    </div>
  );
}
