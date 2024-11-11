/* General Notes for React */


/* Starts:  List - Map */
    const MyComponent = () => {
    const data = [
        { id: 1, name: 'John' },
        { id: 2, name: 'Jane' },
        { id: 3, name: 'Joe' },
    ];

    return (
        <div>
              {/* 1ra manera */}
            <ul>
                {/* Iterar sobre el array y renderizar un <li> por cada elemento *
                    Cuando usas paréntesis () en lugar de llaves {}, NO necesitas agregar un return explícito.
                */}
                {
                    data.map((item) => (
                        <li key={item.id}>{item.name}</li>
                    ))
                }
            </ul>
            {/* 2da manera */}
            <ul>
                {/* 
                    Iterar sobre el array y renderizar un <li> por cada elemento 
                    Cuando usas llaves {} en lugar de paréntesis (), SI necesitas agregar un return explícito.
                */}
                {
                    data.map((item) => {
                    return <li key={item.id}>{item.name}</li>
                    })
                }
            </ul>
        </div>
    );
    };

    export default MyComponent;
/* Ends:  List - Map */