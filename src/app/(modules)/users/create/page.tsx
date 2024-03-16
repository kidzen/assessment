
  import Link from 'next/link';
  import { prisma } from '@/lib/prisma';
  import { createUser } from '@/actions/user';
  import { Input } from '@/components/ui/Input';
  import { Heading } from '@/components/ui/Heading';
  import { Button } from '@/components/ui/Button';
  import { Select } from '@/components/ui/Select';
  
  export default async function UserCreatePage() {
    
    const accounts = await prisma.account.findMany();
  
    const sessions = await prisma.session.findMany();
  
    const UserHasRoles = await prisma.userHasRole.findMany();
  
    return (
      <>
        <header className="mb-4">
          <Heading>Create User</Heading>
        </header>
        <form action={createUser} className="px-2 max-w-xl">
          <div>
    <Input
      type="text"
      label="Name"
      name="name"
      className="mb-2"
      
      
      required
      
    />
  </div><div>
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
      label="Password"
      name="password"
      className="mb-2"
      
      
      required
      
    />
  </div><div>
    <Input
      type="datetime-local"
      label="Email Verified"
      name="emailVerified"
      className="mb-2"
      
      
      
      
    />
  </div><div>
    <Input
      type="text"
      label="Image"
      name="image"
      className="mb-2"
      
      
      
      
    />
  </div><div>
    
    <Select
      name="accounts"
      className="mt-1 mb-2"
      label="Accounts"
      placeholder="Select Accounts"
      
      
      
      isMulti
      options={accounts.map((account) => ({
        label: account.id,
        value: account.id,
      }))}
    />
  
  </div><div>
    
    <Select
      name="sessions"
      className="mt-1 mb-2"
      label="Sessions"
      placeholder="Select Sessions"
      
      
      
      isMulti
      options={sessions.map((session) => ({
        label: session.id,
        value: session.id,
      }))}
    />
  
  </div><div>
    
    <Select
      name="UserHasRole"
      className="mt-1 mb-2"
      label="User Has Role"
      placeholder="Select User Has Role"
      
      
      
      isMulti
      options={UserHasRoles.map((UserHasRole) => ({
        label: UserHasRole.id,
        value: UserHasRole.id,
      }))}
    />
  
  </div>

          <footer className="flex items-center justify-between mt-2">
            <Link
              href="/users"
              className="underline text-gray-500"
            >
              Return to Users list
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
  