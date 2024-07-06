import React, { useState } from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { Bar } from 'react-chartjs-2';
import './custom.css';

const Dashboard = () => {
  const [darkMode, setDarkMode] = useState(false);

  const data = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Bookings',
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [65, 59, 80, 81, 56],
      },
    ],
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode');
  };

  return (
    <div>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <div className="chart-container">
                <Bar
                  data={data}
                  options={{
                    title: {
                      display: true,
                      text: 'Average Room Bookings per Month',
                      fontSize: 20,
                    },
                    legend: {
                      display: true,
                      position: 'right',
                    },
                    responsive: true,
                    maintainAspectRatio: false,
                  }}
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Button className="dark-mode-toggle" variant="dark" onClick={toggleDarkMode}>
        Toggle Dark Mode
      </Button>
    </div>
  );
};

export default Dashboard;

