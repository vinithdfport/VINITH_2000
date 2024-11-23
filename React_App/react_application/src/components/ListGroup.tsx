import { Fragment } from "react/jsx-runtime";

function ListGroup () {
    const items = [
        'Tamilnadu',
        'Coimbatore',
        'Salem',
        'Karnataka'
    ];

    return (
        <Fragment>
        <h1>List Group</h1>
        <ul className="list-group">
        {items.map((item, index) => (
            <li className="list-group-item" key={item} onClick={(event) => console.log(event, index)}>
                {item}
            </li>
        ))}
        </ul>
    </Fragment>
  );
};

export default ListGroup;
