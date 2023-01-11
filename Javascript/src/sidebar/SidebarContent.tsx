interface SidebarContentProps {
  content: string;
}

export default function SidebarContent({ content }: SidebarContentProps) {
  return (
    <>
      {content === "btn1" && <h1>first</h1>}
      {content === "btn2" && <h1>second</h1>}
      {content === "btn3" && <h1>third</h1>}
    </>
  );
}
