import { AppState } from '..';
import { useAppSelector } from '../hooks';

export function useUIState(): AppState['ui'] {
  return useAppSelector((state: { ui: any; }) => state.ui);
}

export function useWalletTabScreenState() {
  const uiState = useUIState();
  return uiState.walletTabScreen;
}
