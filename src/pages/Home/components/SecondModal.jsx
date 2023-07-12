import { Table } from "react-bootstrap";
import { GrFormClose } from "react-icons/gr";
import { useStateValue } from "../../../StateProvider";

export const SecondModal = ({ setModalPage }) => {
  const [{ createPostData }, dispatch] = useStateValue();
  return (
    <>
      <div className="head">
        <h5>Confirm the details</h5>
        <div className="icon-div">
          <GrFormClose
            className="icon"
            size={25}
            onClick={() => setModalPage(1)}
          />
        </div>
      </div>
      <div className="table-content">
        <Table striped bordered hover className="table">
          <thead>
            <tr>
              <th>Entity</th>
              <th>You filled</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Name</td>
              <td>{createPostData?.defaulter_name}</td>
            </tr>
            <tr>
              <td>Age</td>
              <td>{createPostData?.age}</td>
            </tr>
            <tr>
              <td>Pincode</td>
              <td>{createPostData?.pincode}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>{createPostData?.email}</td>
            </tr>
            <tr>
              <td>Address</td>
              <td>{createPostData?.address}</td>
            </tr>
            <tr>
              <td>City</td>
              <td>{createPostData?.city}</td>
            </tr>
            <tr>
              <td>State</td>
              <td>{createPostData?.state}</td>
            </tr>
            <tr>
              <td>Country</td>
              <td>{createPostData?.country}</td>
            </tr>
            <tr>
              <td>Aadhar Number</td>
              <td>{createPostData?.aadhar_number}</td>
            </tr>
            <tr>
              <td>Pancard Number</td>
              <td>{createPostData?.pancard_number}</td>
            </tr>
            <tr>
              <td>Payment Type</td>
              <td>{createPostData?.payment_type}</td>
            </tr>
            <tr>
              <td>Mobile</td>
              <td>{createPostData?.phone_number}</td>
            </tr>
            <tr>
              <td>Organization</td>
              <td>{createPostData?.organization}</td>
            </tr>
          </tbody>
        </Table>
        <div className="buttons">
          <div className="button-primary" onClick={() => setModalPage(1)}>
            Edit
          </div>
          <div className="button-primary" onClick={() => setModalPage(3)}>
            Confirm
          </div>
        </div>
      </div>
    </>
  );
};
