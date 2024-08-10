export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <main className="flex h-screen w-full justify-between font-inter">
          {children}
      </main>
    );
  }
  