import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const MyForm = (props) => {
  return (
    <Form>
      <fieldset className="row">
        <div className="col-md-11 rounded-2">
          <Form.Group className="mb-3">
            <Form.Control
              value={props.searchedItem}
              onChange={props.filterData}
              placeholder="Search"
            />
          </Form.Group>
        </div>
        <div className="col-md-1">
          <Button variant="primary" onClick={props.filterOnClick}>Find</Button>
        </div>
      </fieldset>
    </Form>
  );
};

export default MyForm;
