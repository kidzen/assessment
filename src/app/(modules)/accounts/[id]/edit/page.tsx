
  import Link from 'next/link';
  import { prisma } from '@/lib/prisma';
  import { editAccount } from '@/actions/account';
  import { Input } from '@/components/ui/Input';
  import { Heading } from '@/components/ui/Heading';
  import { Button } from '@/components/ui/Button';
  import { Select } from '@/components/ui/Select';

  export default async function AccountEditPage({ params }: { params: { id: string } }) {
    const account = await prisma.account.findUnique({
      where: { id: params.id },
      include: {
        user: true
      }
      
    });

    
    
      const users = await prisma.user.findMany();
  
    
    if (!account) {
      return (
    <>
      <header>
        <Heading>Account not found</Heading>
      </header>
      <footer>
        <Link href="/accounts">
          Return to Accounts list
        </Link>
      </footer>
    </>
  )
    }

    return (
      <>
        <header className="mb-4">
          <Heading>Edit Account</Heading>
        </header>
        <form action={editAccount} className="px-2 max-w-xl">
          <div>
    <Input
      type="text"
      label="Type"
      name="type"
      className="mb-2"
      
      defaultValue={account.type}
      required
      
    />
  </div><div>
    <Input
      type="text"
      label="Provider"
      name="provider"
      className="mb-2"
      
      defaultValue={account.provider}
      required
      
    />
  </div><div>
    <Input
      type="text"
      label="Provider Account Id"
      name="providerAccountId"
      className="mb-2"
      
      defaultValue={account.providerAccountId}
      required
      
    />
  </div><div>
    <Input
      type="text"
      label="Refresh_token"
      name="refresh_token"
      className="mb-2"
      
      defaultValue={account.refresh_token}
      
      
    />
  </div><div>
    <Input
      type="text"
      label="Access_token"
      name="access_token"
      className="mb-2"
      
      defaultValue={account.access_token}
      
      
    />
  </div><div>
    <Input
      type="number"
      label="Expires_at"
      name="expires_at"
      className="mb-2"
      
      defaultValue={account.expires_at}
      
      
    />
  </div><div>
    <Input
      type="text"
      label="Token_type"
      name="token_type"
      className="mb-2"
      
      defaultValue={account.token_type}
      
      
    />
  </div><div>
    <Input
      type="text"
      label="Scope"
      name="scope"
      className="mb-2"
      
      defaultValue={account.scope}
      
      
    />
  </div><div>
    <Input
      type="text"
      label="Id_token"
      name="id_token"
      className="mb-2"
      
      defaultValue={account.id_token}
      
      
    />
  </div><div>
    <Input
      type="text"
      label="Session_state"
      name="session_state"
      className="mb-2"
      
      defaultValue={account.session_state}
      
      
    />
  </div><div>
    
    <Select
      name="user"
      className="mt-1 mb-2"
      label="User"
      placeholder="Select User"
      defaultValue={{ label: account.user?.id, value: account.user?.id }}
      required
      
      
      options={users.map((user) => ({
        label: user.id,
        value: user.id,
      }))}
    />
  
  </div>

          <input type="hidden" name="id" value={account.id} />

          <footer className="flex items-center justify-between mt-2">
            <Link
              href="/accounts"
              className="underline text-gray-500"
            >
              Return to Accounts list
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
  