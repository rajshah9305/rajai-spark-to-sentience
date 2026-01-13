// Database connection and utilities for Neon PostgreSQL

export interface ContactSubmission {
  id?: number;
  name: string;
  email: string;
  message: string;
  created_at?: Date;
}

// Enhanced database interface with proper error handling
export const db = {
  async createContactTable() {
    // This would create the contacts table in Neon
    const createTableSQL = `
      CREATE TABLE IF NOT EXISTS contacts (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        message TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT NOW()
      );
    `;
    console.log('Would execute:', createTableSQL);
  },

  async insertContact(contact: Omit<ContactSubmission, 'id' | 'created_at'>): Promise<ContactSubmission> {
    // Validate input
    if (!contact.name?.trim() || !contact.email?.trim() || !contact.message?.trim()) {
      throw new Error('All fields are required');
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(contact.email)) {
      throw new Error('Invalid email format');
    }

    // Simulate database insertion with proper error handling
    try {
      // In production, this would use a proper PostgreSQL client like 'pg' or '@neondatabase/serverless'
      console.log('Inserting contact:', contact);
      
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Simulate occasional failures for testing
      if (Math.random() < 0.1) {
        throw new Error('Database connection failed');
      }

      const result: ContactSubmission = {
        id: Date.now(),
        ...contact,
        created_at: new Date()
      };

      return result;
    } catch (error) {
      console.error('Database error:', error);
      throw new Error('Failed to save contact information');
    }
  },

  async getContacts(): Promise<ContactSubmission[]> {
    // This would fetch contacts from Neon
    console.log('Would fetch contacts from Neon database');
    return [];
  }
};

// Database configuration
export const dbConfig = {
  // In production, use environment variables
  url: import.meta.env.VITE_DATABASE_URL || '',
  maxRetries: 3,
  retryDelay: 1000,
};