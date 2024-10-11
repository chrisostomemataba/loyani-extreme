"use client";

import React, { useState } from 'react';
import { Modal, Box, Typography, Button, TextField, Stepper, Step, StepLabel } from '@mui/material';
import { AccountCircle, Email, Phone, DateRange, Group } from '@mui/icons-material';
import { DatePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';  // Use Day.js as the date adapter
import Swal from 'sweetalert2';
import styles from '../../styles/bookingModal.module.css';

const steps = ['Contact Details', 'Travel Dates & Group Size', 'Additional Information'];

export default function BookingModal({ open, onClose, onSubmit }) {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    travelDates: null,
    groupSize: '',
    preferences: ''
  });

  const handleNext = () => {
    if (activeStep === 0 && (!formData.name || !formData.email || !formData.phone)) {
      Swal.fire('Oops!', 'Please fill out all contact details', 'error');
      return;
    }
    if (activeStep === 1 && (!formData.travelDates || !formData.groupSize)) {
      Swal.fire('Oops!', 'Please select a travel date and group size', 'error');
      return;
    }

    if (activeStep < steps.length - 1) {
      setActiveStep(activeStep + 1);
    } else {
      onSubmit(formData);
      Swal.fire('Success!', 'Your booking has been submitted', 'success');
      onClose();
    }
  };

  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <Modal open={open} onClose={onClose} className={styles.modal}>
      <Box className={styles.modalContent}>
        <Typography variant="h4" className="text-center mb-6">Book Your Safari</Typography>

        <Stepper activeStep={activeStep} className="mb-6">
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        {/* Step 1: Contact Details */}
        {activeStep === 0 && (
          <div className="step-content">
            <TextField
              label="Full Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              fullWidth
              margin="normal"
              InputProps={{
                startAdornment: <AccountCircle style={{ color: '#ce6510' }} />
              }}
            />
            <TextField
              label="Email Address"
              name="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              margin="normal"
              InputProps={{
                startAdornment: <Email style={{ color: '#ce6510' }} />
              }}
            />
            <TextField
              label="Phone Number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              fullWidth
              margin="normal"
              InputProps={{
                startAdornment: <Phone style={{ color: '#ce6510' }} />
              }}
            />
          </div>
        )}

        {/* Step 2: Travel Dates & Group Size */}
        {activeStep === 1 && (
          <div className="step-content">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Travel Dates"
                value={formData.travelDates}
                onChange={(date) => setFormData({ ...formData, travelDates: date })}
                renderInput={(params) => (
                  <TextField {...params} fullWidth margin="normal" InputProps={{ startAdornment: <DateRange style={{ color: '#ce6510' }} /> }} />
                )}
              />
            </LocalizationProvider>
            <TextField
              label="Group Size"
              name="groupSize"
              value={formData.groupSize}
              onChange={handleChange}
              fullWidth
              margin="normal"
              InputProps={{
                startAdornment: <Group style={{ color: '#ce6510' }} />
              }}
            />
          </div>
        )}

        {/* Step 3: Additional Information */}
        {activeStep === 2 && (
          <div className="step-content">
            <TextField
              label="Preferences or Requests"
              name="preferences"
              value={formData.preferences}
              onChange={handleChange}
              multiline
              rows={4}
              fullWidth
              margin="normal"
            />
          </div>
        )}

        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
          <Button disabled={activeStep === 0} onClick={handleBack}>
            Back
          </Button>
          <Button variant="contained" onClick={handleNext} style={{ backgroundColor: '#ce6510', color: '#fff' }}>
            {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
