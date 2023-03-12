import { APP_TITLE } from '@/common/CommonUtils';
import UrlShortenerLogo from '@/common/UrlShortenerLogo';
import ShortUrlForm from '@/short-url/ShortUrlForm';
import { URL_LIFETIME_IN_MINUTES } from '@/short-url/ShortUrlUtils';

export default function HomePage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <div className="h-64 mb-4">
          <UrlShortenerLogo />
        </div>
        <div>
          <h1 className="sr-only">{APP_TITLE}</h1>
          <p className="text-center font-semibold text-primary-600">
            {APP_TITLE} is an open source URL shortener demo.
            <br />
            Since this is a demo application, shortened URLs will be active for{' '}
            {URL_LIFETIME_IN_MINUTES} minutes only.
          </p>
        </div>
      </div>
      <ShortUrlForm />
    </div>
  );
}
