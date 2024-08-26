import { Modal, Button } from 'react-bootstrap'
const Note = () => {
    return (
        <>
            <Modal >
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Modal body
                </Modal.Body>
                <Modal.Footer>
                    <Button >Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default Note;