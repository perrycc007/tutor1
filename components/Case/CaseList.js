import Caseitem from './CaseItem';
import classes from './CaseList.module.css';
function CaseList(props) {
  return (
    <ul className={classes.list}>
      {props.cases.map((acase) => (
        <Caseitem
          key={acase.id}
          id={acase.id}
          image={acase.image}
          title={acase.title}
          address={acase.address}
          description={acase.description}
        />
      ))}
    </ul>
  );
}

export default CaseList;
