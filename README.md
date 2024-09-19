# Jed Wiebe for BC Greens

This is the campaign website for Jed Wiebe, Green Party Candidate for Salmon Arm - Shuswap.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (version 18.17.0)
- npm (comes with Node.js)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/JDob11/green-wiebe-home.git
   cd green-wiebe-home
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up environment variables:
   - Copy the `.env.example` file to a new file named `.env.local`
   - Replace the placeholder values in `.env.local` with your actual credentials:
     ```
     EMAIL_USERNAME=your_email@example.com
     EMAIL_PASSWORD=your_email_password
     EMAIL_TO=recipient_email@example.com
     ```

4. Run the development server:
   ```
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `app/`: Contains the main pages and components of the application
- `components/`: Reusable React components
- `public/`: Static assets like images

## Built With

- [Next.js](https://nextjs.org/) - The React framework used
- [Tailwind CSS](https://tailwindcss.com/) - For styling

## Deployment

This project is set up to be deployed on Vercel. Push to the main branch to trigger a deployment.

## Author

- Jeff Dobson - [JDob11](https://github.com/JDob11)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

- BC Green Party
- Jed Wiebe
