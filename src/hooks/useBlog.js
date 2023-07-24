import { useEffect, useState } from 'react';
import { contactsData } from '../data/contactsData';

function UseBlog() {
  const [blogs, setBlogs] = useState([]);
  const { devUsername } = contactsData;

  useEffect(() => {
    fetch(`https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.medium.com%2Ffeed%2F%40safeti`)
      .then((response) => response.json())
      .then(data => {
        // const filtered = data.sort(() => Math.random() - 0.5);
        setBlogs(data.items)
      })
  }, [devUsername]);
  console.log(blogs)
  return { blogs };
};

export default UseBlog;