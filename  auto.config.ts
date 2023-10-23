import type { AutoRc } from 'auto';

/**
 * Auto configuration
 * @see https://intuit.github.io/auto/docs/configuration/autorc
 */
export default function rc(): AutoRc {
  return {
    baseBranch: 'main',
    plugins: ['npm', 'released'],
    shipit: {
      onlyGraduateWithReleaseLabel: true,
      prerelease: true,
    },
  };
}