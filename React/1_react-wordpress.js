/* General Notes for React + Wordpress*/

/*  Para obtener los datos de la página o post actual, 
    puedes hacer una solicitud GET a la siguiente URL, dependiendo de si deseas obtener información sobre un post o una página:

    - Para obtener un post específico: http://your-site-url/wp-json/wp/v2/posts/{post_id}

    - Para obtener una página específica: http://your-site-url/wp-json/wp/v2/pages/{page_id}

    ** Si no sabes el post_id o page_id, puedes obtener la lista de todas las páginas o posts utilizando:

    - Para obtener todos los posts: http://your-site-url/wp-json/wp/v2/posts

    - Para obtener todas las páginas: http://your-site-url/wp-json/wp/v2/pages
*/

// Ejemplo de código en React:
import React, { useEffect, useState } from 'react';

const CurrentPageData = () => {
  const [pageData, setPageData] = useState(null);

  useEffect(() => {
    // Obtener el ID de la página actual (puedes usar un valor dinámico en función de la URL actual)
    const pageId = window.location.pathname.split('/').pop();  // O el ID que prefieras

    // Realizar la solicitud a la REST API de WordPress
    fetch(`http://your-site-url/wp-json/wp/v2/pages/${pageId}`)
      .then(response => response.json())
      .then(data => setPageData(data))
      .catch(error => console.error('Error fetching page data:', error));
  }, []);

  if (!pageData) return <div>Loading...</div>;

  return (
    <div>
      <h1>{pageData.title.rendered}</h1>
      <div dangerouslySetInnerHTML={{ __html: pageData.content.rendered }} />
    </div>
  );
};

export default CurrentPageData;
