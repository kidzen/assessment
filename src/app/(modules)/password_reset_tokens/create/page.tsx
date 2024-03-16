
  import Link from 'next/link';
  import { prisma } from '@/lib/prisma';
  import { createPasswordResetToken } from '@/actions/password_reset_token';
  import { Input } from '@/components/ui/Input';
  import { Heading } from '@/components/ui/Heading';
  import { Button } from '@/components/ui/Button';
  
  
  export default async function PasswordResetTokenCreatePage() {
    
    return (
      <>
        <header className="mb-4">
          <Heading>Create PasswordResetToken</Heading>
        </header>
        <form action={createPasswordResetToken} className="px-2 max-w-xl">
          <div>
    <Input
      type="text"
      label="Email"
      name="email"
      className="mb-2"
      
      
      required
      
    />
  </div><div>
    <Input
      type="text"
      label="Token"
      name="token"
      className="mb-2"
      
      
      required
      
    />
  </div><div>
    <Input
      type="datetime-local"
      label="Expires"
      name="expires"
      className="mb-2"
      
      
      required
      
    />
  </div>

          <footer className="flex items-center justify-between mt-2">
            <Link
              href="/password_reset_tokens"
              className="underline text-gray-500"
            >
              Return to Password Reset Tokens list
            </Link>
  
            <Button
              type="submit"
            >
              Create
            </Button>
          </footer>
        </form>
      </>
    )
  }
  