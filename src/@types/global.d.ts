interface FakeCacheType {
  [key: string]: unknown;
}

interface ContactType {
  [key: string]: unknown;
}

type ErrorType = Error & { statusText: string };
