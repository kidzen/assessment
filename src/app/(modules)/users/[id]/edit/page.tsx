
  import Link from 'next/link';
  import { prisma } from '@/lib/prisma';
  import { editUser } from '@/actions/user';
  import { Input } from '@/components/ui/Input';
  import { Heading } from '@/components/ui/Heading';
  import { Button } from '@/components/ui/Button';
  import { Select } from '@/components/ui/Select';

  export default async function UserEditPage({ params }: { params: { id: string } }) {
    const user = await prisma.user.findUnique({
      where: { id: params.id },
      include: {
        accounts: true,
sessions: true,
UserHasRole: true
      }
      
    });

    
    
      const accounts = await prisma.account.findMany();
  
    
      const sessions = await prisma.session.findMany();
  
    
      const UserHasRoles = await prisma.userHasRole.findMany();
  
    
    if (!user) {
      return (
    <>
      <header>
        <Heading>User not found</Heading>
      </header>
      <footer>
        <Link href="/users">
          Return to Users list
        </Link>
      </footer>
    </>
  )
    }

    return (
      <>
        <header className="mb-4">
          <Heading>Edit User</Heading>
        </header>
        <form action={editUser} className="px-2 max-w-xl">
          <div>
    <Input
      type="text"
      label="Name"
      name="name"
      className="mb-2"
      
      defaultValue={user.name}
      required
      
    />
  </div><div>
    <Input
      type="text"
      label="Email"
      name="email"
      className="mb-2"
      
      defaultValue={user.email}
      required
      
    />
  </div><div>
    <Input
      type="text"
      label="Password"
      name="password"
      className="mb-2"
      
      defaultValue={user.password}
      required
      
    />
  </div><div>
    <Input
      type="datetime-local"
      label="Email Verified"
      name="emailVerified"
      className="mb-2"
      
      defaultValue={new Date(user.emailVerified).toISOString().slice(0,16)}
      
      
    />
  </div><div>
    <Input
      type="text"
      label="Image"
      name="image"
      className="mb-2"
      
      defaultValue={user.image}
      
      
    />
  </div><div>
    
    <Select
      name="accounts"
      className="mt-1 mb-2"
      label="Accounts"
      placeholder="Select Accounts"
      defaultValue={user.accounts.map((account) => ({ label: account.id, value: account.id}))}
      
      
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
      defaultValue={user.sessions.map((session) => ({ label: session.id, value: session.id}))}
      
      
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
      defaultValue={user.UserHasRole.map((UserHasRole) => ({ label: UserHasRole.id, value: UserHasRole.id}))}
      
      
      isMulti
      options={UserHasRoles.map((UserHasRole) => ({
        label: UserHasRole.id,
        value: UserHasRole.id,
      }))}
    />
  
  </div>

          <input type="hidden" name="id" value={user.id} />

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
              Update
            </Button>
          </footer>
        </form>
      </>
    )
  }
  