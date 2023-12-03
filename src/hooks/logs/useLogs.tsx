import { useContext, useEffect, useState } from 'react';
import { ApiContext } from '@/apis/api.context';
import { LogModel } from '@/types/models/log/log.model';

interface useLogsProps {
  projectId?: string;
}

interface hookResponse {
  isFetching?: boolean;
  logs: LogModel[];
  errorMessage: string;
}

export const useLogs = ({ projectId }: useLogsProps): hookResponse => {
  const apis = useContext(ApiContext);

  const [isFetching, setIsFetching] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [logs, setLogs] = useState<LogModel[]>([]);

  useEffect(() => {
    let isMounted = true;

    setIsFetching(true);

    apis.logs
      .getLogs(projectId)
      .then((res) => {
        if (!isMounted) return;

        setLogs(res);
      })
      .catch((err) => {
        if (!isMounted) return;

        setErrorMessage(err.message);
      })
      .finally(() => {
        if (!isMounted) return;

        setIsFetching(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return { isFetching, logs, errorMessage };
};
