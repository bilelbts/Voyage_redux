import { Container, Row, Col, Form, Button, Card, Alert } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";
import "./Contact.css";

function Contact() {
    const contactSchema = Yup.object().shape({
        name: Yup.string()
            .min(2, "Le nom doit contenir au moins 2 caractères")
            .required("Le nom est obligatoire"),

        email: Yup.string()
            .email("Adresse email invalide")
            .required("L'email est obligatoire"),

        subject: Yup.string()
            .min(3, "Le sujet doit contenir au moins 3 caractères")
            .required("Le sujet est obligatoire"),

        message: Yup.string()
            .min(10, "Le message doit contenir au moins 10 caractères")
            .required("Le message est obligatoire"),
    });

    return (
        <main>
            <section className="contact-hero">
                <Container>
                    <h1>Contactez-nous</h1>
                    <p>
                        Une question sur une destination, une réservation ou une offre de voyage ?
                        Notre équipe est là pour vous aider.
                    </p>
                </Container>
            </section>

            <section className="contact-section">
                <Container>
                    <Row className="g-4">
                        <Col md={6}>
                            <Card className="contact-card">
                                <Card.Body>
                                    <h2>Envoyez-nous un message</h2>

                                    <Formik
                                        initialValues={{
                                            name: "",
                                            email: "",
                                            subject: "",
                                            message: "",
                                        }}
                                        validationSchema={contactSchema}
                                        onSubmit={(values, { resetForm, setSubmitting, setStatus }) => {
                                            console.log("Message envoyé :", values);

                                            setStatus("Votre message a bien été envoyé !");
                                            resetForm();
                                            setSubmitting(false);
                                        }}
                                    >
                                        {({
                                            values,
                                            errors,
                                            touched,
                                            handleChange,
                                            handleBlur,
                                            handleSubmit,
                                            isSubmitting,
                                            status,
                                        }) => (
                                            <Form onSubmit={handleSubmit}>
                                                {status && (
                                                    <Alert variant="success">
                                                        {status}
                                                    </Alert>
                                                )}

                                                <Form.Group className="mb-3">
                                                    <Form.Label>Nom complet</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        name="name"
                                                        placeholder="Votre nom"
                                                        value={values.name}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        isInvalid={touched.name && !!errors.name}
                                                    />
                                                    <Form.Control.Feedback type="invalid">
                                                        {errors.name}
                                                    </Form.Control.Feedback>
                                                </Form.Group>

                                                <Form.Group className="mb-3">
                                                    <Form.Label>Email</Form.Label>
                                                    <Form.Control
                                                        type="email"
                                                        name="email"
                                                        placeholder="Votre adresse email"
                                                        value={values.email}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        isInvalid={touched.email && !!errors.email}
                                                    />
                                                    <Form.Control.Feedback type="invalid">
                                                        {errors.email}
                                                    </Form.Control.Feedback>
                                                </Form.Group>

                                                <Form.Group className="mb-3">
                                                    <Form.Label>Sujet</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        name="subject"
                                                        placeholder="Exemple : Voyage à Bali"
                                                        value={values.subject}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        isInvalid={touched.subject && !!errors.subject}
                                                    />
                                                    <Form.Control.Feedback type="invalid">
                                                        {errors.subject}
                                                    </Form.Control.Feedback>
                                                </Form.Group>

                                                <Form.Group className="mb-3">
                                                    <Form.Label>Message</Form.Label>
                                                    <Form.Control
                                                        as="textarea"
                                                        rows={5}
                                                        name="message"
                                                        placeholder="Écrivez votre message..."
                                                        value={values.message}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        isInvalid={touched.message && !!errors.message}
                                                    />
                                                    <Form.Control.Feedback type="invalid">
                                                        {errors.message}
                                                    </Form.Control.Feedback>
                                                </Form.Group>

                                                <Button
                                                    variant="primary"
                                                    type="submit"
                                                    disabled={isSubmitting}
                                                >
                                                    {isSubmitting ? "Envoi..." : "Envoyer le message"}
                                                </Button>
                                            </Form>
                                        )}
                                    </Formik>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={6}>
                            <Card className="contact-card">
                                <Card.Body>
                                    <h2>Nos informations</h2>

                                    <div className="contact-info">
                                        <h5>Adresse</h5>
                                        <p>25 Avenue des Voyages, 75000 Paris</p>
                                    </div>

                                    <div className="contact-info">
                                        <h5>Email</h5>
                                        <p>contact@travelshop.com</p>
                                    </div>

                                    <div className="contact-info">
                                        <h5>Téléphone</h5>
                                        <p>01 23 45 67 89</p>
                                    </div>

                                    <div className="contact-info">
                                        <h5>Horaires</h5>
                                        <p>
                                            Lundi - Vendredi : 9h00 - 18h00
                                            <br />
                                            Samedi : 10h00 - 16h00
                                        </p>
                                    </div>

                                    <div className="contact-box">
                                        <h4>Besoin d’inspiration ?</h4>
                                        <p>
                                            Découvrez nos meilleures destinations et préparez votre prochain voyage
                                            avec notre équipe de conseillers.
                                        </p>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
        </main>
    );
}

export default Contact;