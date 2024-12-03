import fs from 'fs/promises';
import path from 'path';

const projectRoot = process.cwd();

async function createDirectory(dir) {
  await fs.mkdir(dir, { recursive: true });
}

async function writeFile(filePath, content) {
  await fs.writeFile(filePath, content, 'utf8');
}

async function setupProject() {
  console.log('Setting up YL Telebots Admin Panel...');

  // Create necessary directories
  await createDirectory(path.join(projectRoot, 'lib'));
  await createDirectory(path.join(projectRoot, 'components'));
  await createDirectory(path.join(projectRoot, 'components', 'ui'));

  // Create utils.ts in lib directory
  const utilsContent = `
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
`;
  await writeFile(path.join(projectRoot, 'lib', 'utils.ts'), utilsContent);

  // Create layout.tsx in components directory
  const layoutContent = `
import React from 'react'
import Header from './header'
import Sidebar from './sidebar'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 dark:bg-gray-900">
          <div className="container mx-auto px-6 py-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
`;
  await writeFile(path.join(projectRoot, 'components', 'layout.tsx'), layoutContent);

  // Update tsconfig.json to include proper paths
  const tsconfigPath = path.join(projectRoot, 'tsconfig.json');
  const tsconfig = JSON.parse(await fs.readFile(tsconfigPath, 'utf8'));
  tsconfig.compilerOptions = {
    ...tsconfig.compilerOptions,
    baseUrl: ".",
    paths: {
      "@/*": ["./*"]
    }
  };
  await writeFile(tsconfigPath, JSON.stringify(tsconfig, null, 2));

  console.log('Project setup complete. Please restart your development server.');
}

setupProject().catch(console.error);