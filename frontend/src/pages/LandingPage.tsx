import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
  AppBar,
  Toolbar,
  IconButton,
  useTheme,
  useMediaQuery,
  Stack,
  Chip,
  Avatar,
  Rating,
} from '@mui/material';
import {
  LocalHospital,
  Schedule,
  People,
  Security,
  Phone,
  Email,
  Menu,
  ArrowForward,
  CheckCircle,
  Star,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const LandingPage: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();

  const features = [
    {
      icon: <Schedule sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      title: 'Easy Appointment Booking',
      description: 'Book appointments with your preferred doctors in just a few clicks. View available time slots and get instant confirmation.',
    },
    {
      icon: <People sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      title: 'Expert Medical Staff',
      description: 'Access to qualified doctors and specialists. Get the best medical care from experienced healthcare professionals.',
    },
    {
      icon: <Security sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      title: 'Secure & Private',
      description: 'Your medical data is protected with industry-standard security measures. Complete privacy and confidentiality guaranteed.',
    },
    {
      icon: <LocalHospital sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      title: '24/7 Healthcare Support',
      description: 'Round-the-clock medical support and emergency services. We\'re here when you need us most.',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Patient',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b776?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      comment: 'Excellent service! The online booking system made it so easy to schedule my appointment.',
    },
    {
      name: 'Dr. Michael Chen',
      role: 'Cardiologist',
      avatar: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      comment: 'The platform streamlines my practice management. I can focus more on patient care.',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Patient',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      comment: 'Professional, efficient, and user-friendly. Highly recommend this healthcare platform.',
    },
  ];

  return (
    <Box sx={{ minHeight: '100vh' }}>
      {/* Navigation */}
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <LocalHospital sx={{ fontSize: 32, color: theme.palette.primary.main }} />
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 800,
                  color: theme.palette.text.primary,
                  letterSpacing: '-0.025em',
                }}
              >
                MediCare+
              </Typography>
            </Box>

            {!isMobile && (
              <Stack direction="row" spacing={3}>
                <Button color="inherit" sx={{ color: theme.palette.text.primary }}>
                  Services
                </Button>
                <Button color="inherit" sx={{ color: theme.palette.text.primary }}>
                  About
                </Button>
                <Button color="inherit" sx={{ color: theme.palette.text.primary }}>
                  Contact
                </Button>
              </Stack>
            )}

            <Stack direction="row" spacing={2}>
              <Button
                variant="outlined"
                onClick={() => navigate('/login')}
                sx={{
                  borderColor: theme.palette.primary.main,
                  color: theme.palette.primary.main,
                  '&:hover': {
                    backgroundColor: theme.palette.primary.main,
                    color: 'white',
                  },
                }}
              >
                Login
              </Button>
              <Button
                variant="contained"
                onClick={() => navigate('/register')}
                sx={{
                  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: theme.shadows[4],
                  },
                }}
              >
                Sign Up
              </Button>
              {isMobile && (
                <IconButton>
                  <Menu />
                </IconButton>
              )}
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Hero Section */}
      <Box
        sx={{
          background: `linear-gradient(135deg, ${theme.palette.primary.main}10 0%, ${theme.palette.secondary.main}10 100%)`,
          pt: { xs: 12, md: 16 },
          pb: { xs: 8, md: 12 },
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Chip
                  label="✨ Leading Healthcare Platform"
                  sx={{
                    mb: 3,
                    backgroundColor: theme.palette.primary.main,
                    color: 'white',
                    fontWeight: 600,
                  }}
                />
                <Typography
                  variant="h1"
                  sx={{
                    mb: 3,
                    background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                  }}
                >
                  Your Health,
                  <br />
                  Our Priority
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    mb: 4,
                    color: theme.palette.text.secondary,
                    lineHeight: 1.6,
                    fontWeight: 400,
                  }}
                >
                  Experience world-class healthcare with our comprehensive
                  hospital management system. Book appointments, manage records,
                  and connect with expert medical professionals.
                </Typography>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                  <Button
                    variant="contained"
                    size="large"
                    endIcon={<ArrowForward />}
                    onClick={() => navigate('/register')}
                    sx={{
                      py: 2,
                      px: 4,
                      fontSize: '1.1rem',
                      background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: theme.shadows[6],
                      },
                    }}
                  >
                    Get Started Today
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    onClick={() => navigate('/login')}
                    sx={{
                      py: 2,
                      px: 4,
                      fontSize: '1.1rem',
                      borderColor: theme.palette.primary.main,
                      color: theme.palette.primary.main,
                      '&:hover': {
                        backgroundColor: theme.palette.primary.main,
                        color: 'white',
                      },
                    }}
                  >
                    Login
                  </Button>
                </Stack>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    borderRadius: 4,
                    overflow: 'hidden',
                    boxShadow: theme.shadows[8],
                  }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop"
                    alt="Healthcare"
                    style={{
                      width: '100%',
                      height: 'auto',
                      display: 'block',
                    }}
                  />
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <motion.div variants={fadeInUp}>
              <Typography
                variant="h2"
                sx={{
                  mb: 2,
                  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Why Choose MediCare+?
              </Typography>
              <Typography variant="h6" color="text.secondary">
                Comprehensive healthcare solutions designed for modern medical needs
              </Typography>
            </motion.div>
          </Box>

          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div variants={fadeInUp}>
                  <Card
                    sx={{
                      height: '100%',
                      textAlign: 'center',
                      p: 3,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: theme.shadows[6],
                      },
                    }}
                  >
                    <CardContent>
                      <Box sx={{ mb: 2 }}>{feature.icon}</Box>
                      <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                        {feature.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {feature.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>

      {/* Testimonials Section */}
      <Box sx={{ backgroundColor: theme.palette.grey[50], py: { xs: 8, md: 12 } }}>
        <Container maxWidth="xl">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <Box sx={{ textAlign: 'center', mb: 8 }}>
              <motion.div variants={fadeInUp}>
                <Typography
                  variant="h2"
                  sx={{
                    mb: 2,
                    background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  What Our Patients Say
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  Real experiences from our healthcare community
                </Typography>
              </motion.div>
            </Box>

            <Grid container spacing={4}>
              {testimonials.map((testimonial, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <motion.div variants={fadeInUp}>
                    <Card
                      sx={{
                        height: '100%',
                        p: 3,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-4px)',
                          boxShadow: theme.shadows[4],
                        },
                      }}
                    >
                      <CardContent>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                          <Avatar
                            src={testimonial.avatar}
                            sx={{ width: 56, height: 56, mr: 2 }}
                          />
                          <Box>
                            <Typography variant="h6" sx={{ fontWeight: 600 }}>
                              {testimonial.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {testimonial.role}
                            </Typography>
                          </Box>
                        </Box>
                        <Rating value={testimonial.rating} readOnly sx={{ mb: 2 }} />
                        <Typography variant="body1" sx={{ fontStyle: 'italic' }}>
                          "{testimonial.comment}"
                        </Typography>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        sx={{
          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
          py: { xs: 8, md: 12 },
          color: 'white',
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Typography variant="h2" sx={{ mb: 2, fontWeight: 700 }}>
              Ready to Experience Better Healthcare?
            </Typography>
            <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
              Join thousands of patients who trust MediCare+ for their healthcare needs
            </Typography>
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate('/register')}
              sx={{
                py: 2,
                px: 6,
                fontSize: '1.2rem',
                backgroundColor: 'white',
                color: theme.palette.primary.main,
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  transform: 'translateY(-2px)',
                  boxShadow: theme.shadows[6],
                },
              }}
            >
              Start Your Journey Today
            </Button>
          </motion.div>
        </Container>
      </Box>

      {/* Footer */}
      <Box sx={{ backgroundColor: theme.palette.grey[900], color: 'white', py: 6 }}>
        <Container maxWidth="xl">
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                <LocalHospital sx={{ fontSize: 32, color: theme.palette.primary.main }} />
                <Typography variant="h5" sx={{ fontWeight: 800 }}>
                  MediCare+
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                Leading the future of healthcare with innovative technology and compassionate care.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                Contact Info
              </Typography>
              <Stack spacing={1}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Phone sx={{ fontSize: 20 }} />
                  <Typography variant="body2">+1 (555) 123-4567</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Email sx={{ fontSize: 20 }} />
                  <Typography variant="body2">info@medicareplus.com</Typography>
                </Box>
              </Stack>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                Quick Links
              </Typography>
              <Stack spacing={1}>
                <Button color="inherit" size="small" sx={{ justifyContent: 'flex-start' }}>
                  Services
                </Button>
                <Button color="inherit" size="small" sx={{ justifyContent: 'flex-start' }}>
                  About Us
                </Button>
                <Button color="inherit" size="small" sx={{ justifyContent: 'flex-start' }}>
                  Privacy Policy
                </Button>
              </Stack>
            </Grid>
          </Grid>
          <Box sx={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', mt: 4, pt: 4, textAlign: 'center' }}>
            <Typography variant="body2" sx={{ opacity: 0.6 }}>
              © 2024 MediCare+. All rights reserved.
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default LandingPage;
