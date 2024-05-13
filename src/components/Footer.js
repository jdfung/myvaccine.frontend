import { Col, Row } from "react-bootstrap";

const Footer = () => (

    <div>
        <footer style={{backgroundColor: '#27b2b3'}} className="page-footer">
            <div className="container p-4">
                <Row>
                    <Col>
                        <h5 className="mb-3" style={{letterSpacing: '2px'}}>footer content</h5>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
                            molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae aliquam
                            voluptatem veniam, est atque cumque eum delectus sint!</p>
                    </Col>
                    <Col>
                        <h5 className="mb-3" style={{letterSpacing: '2px'}}>address</h5>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
                            molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae aliquam
                            voluptatem veniam, est atque cumque eum delectus sint!</p>
                    </Col>
                    <Col>
                        <h5 className="mb-3" style={{letterSpacing: '2px'}}>Contacts</h5>
                        <table className="table" style={{Color: '#4f4f4f', borderColor: '#666'}}>
                            <tbody>
                                <tr>
                                    <td>Hotline</td>
                                    <td>+60 128372637</td>
                                </tr>
                                <tr>
                                    <td>Email</td>
                                    <td>xxxxx@gmail.com</td>
                                </tr>
                            </tbody>
                        </table>
                    </Col>
                </Row>
            </div>
            <div class="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
                © 2024 Copyright:
                
                </div>
        </footer>
    </div>

)


export default Footer;