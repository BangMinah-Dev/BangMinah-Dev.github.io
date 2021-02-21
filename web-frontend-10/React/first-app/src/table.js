import Table from "react-bootstrap/Table";
import lding from "./loading.gif";

function _Table() {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th scope="col">Họ tên</th>
                    <th scope="col">Năm sinh</th>
                    <th scope="col">Email</th>
                    <th scope="col">Số điện thoại</th>
                    <th scope="col">Chức năng</th>
                </tr>
            </thead>
            <tbody>
                <tr className="loading show">
                    <td className="text-center" colSpan="5">
                        <img src={lding} alt="loading" width="50%" />
                    </td>
                </tr>
            </tbody>
        </Table>
    );
}

export default _Table;
