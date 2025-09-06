import axios from 'axios';
import { User, Doctor, Patient, Appointment, AuthResponse, ApiResponse } from '../types';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add auth token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Handle auth errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export const authService = {
  async login(email: string, password: string): Promise<AuthResponse> {
    const response = await api.post<AuthResponse>('/auth/login', { email, password });
    return response.data;
  },

  async register(userData: Partial<User> & { password: string }): Promise<AuthResponse> {
    const response = await api.post<AuthResponse>('/auth/register', userData);
    return response.data;
  },

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  },

  getCurrentUser(): User | null {
    const userStr = localStorage.getItem('user');
    return userStr ? JSON.parse(userStr) : null;
  },

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  },
};

export const doctorService = {
  async getAllDoctors(): Promise<Doctor[]> {
    const response = await api.get<ApiResponse<Doctor[]>>('/doctors');
    return response.data.data || [];
  },

  async getDoctorById(id: string): Promise<Doctor> {
    const response = await api.get<ApiResponse<Doctor>>(`/doctors/${id}`);
    return response.data.data!;
  },

  async createDoctor(doctorData: Partial<Doctor>): Promise<Doctor> {
    const response = await api.post<ApiResponse<Doctor>>('/doctors', doctorData);
    return response.data.data!;
  },

  async updateDoctor(id: string, doctorData: Partial<Doctor>): Promise<Doctor> {
    const response = await api.put<ApiResponse<Doctor>>(`/doctors/${id}`, doctorData);
    return response.data.data!;
  },

  async deleteDoctor(id: string): Promise<void> {
    await api.delete(`/doctors/${id}`);
  },
};

export const patientService = {
  async getAllPatients(): Promise<Patient[]> {
    const response = await api.get<ApiResponse<Patient[]>>('/patients');
    return response.data.data || [];
  },

  async getPatientById(id: string): Promise<Patient> {
    const response = await api.get<ApiResponse<Patient>>(`/patients/${id}`);
    return response.data.data!;
  },

  async createPatient(patientData: Partial<Patient>): Promise<Patient> {
    const response = await api.post<ApiResponse<Patient>>('/patients', patientData);
    return response.data.data!;
  },

  async updatePatient(id: string, patientData: Partial<Patient>): Promise<Patient> {
    const response = await api.put<ApiResponse<Patient>>(`/patients/${id}`, patientData);
    return response.data.data!;
  },

  async deletePatient(id: string): Promise<void> {
    await api.delete(`/patients/${id}`);
  },
};

export const appointmentService = {
  async getAllAppointments(): Promise<Appointment[]> {
    const response = await api.get<ApiResponse<Appointment[]>>('/appointments');
    return response.data.data || [];
  },

  async getAppointmentById(id: string): Promise<Appointment> {
    const response = await api.get<ApiResponse<Appointment>>(`/appointments/${id}`);
    return response.data.data!;
  },

  async createAppointment(appointmentData: Partial<Appointment>): Promise<Appointment> {
    const response = await api.post<ApiResponse<Appointment>>('/appointments', appointmentData);
    return response.data.data!;
  },

  async updateAppointment(id: string, appointmentData: Partial<Appointment>): Promise<Appointment> {
    const response = await api.put<ApiResponse<Appointment>>(`/appointments/${id}`, appointmentData);
    return response.data.data!;
  },

  async deleteAppointment(id: string): Promise<void> {
    await api.delete(`/appointments/${id}`);
  },

  async getAppointmentsByDoctor(doctorId: string): Promise<Appointment[]> {
    const response = await api.get<ApiResponse<Appointment[]>>(`/appointments/doctor/${doctorId}`);
    return response.data.data || [];
  },

  async getAppointmentsByPatient(patientId: string): Promise<Appointment[]> {
    const response = await api.get<ApiResponse<Appointment[]>>(`/appointments/patient/${patientId}`);
    return response.data.data || [];
  },
};

export default api;
