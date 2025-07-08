import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {
  faPrint as fasPrint,
  faPlay as fasPlay,
  faArrowRight as fasArrowRight,
  faChevronRight as fasChevronRight,
  faChevronLeft as fasChevronLeft,
  faImage as fasImage,
  faCloud as fasCloud,
  faQuestion as fasQuestion,
  faBolt as fasBolt,
  faToolbox as fasToolbox,
  faStar as fasStar,
  faEnvelope as fasEnvelope,
  faPhone as fasPhone,
  faLocationDot as fasLocationDot,
} from '@fortawesome/free-solid-svg-icons';

// This function initializes the FontAwesome icon library with specific icons, import and add the icons here.
export function initializeIcons(library: FaIconLibrary): void {
  library.addIcons(
    fasPrint,
    fasPlay,
    fasArrowRight,
    fasChevronRight,
    fasChevronLeft,
    fasImage,
    fasCloud,
    fasQuestion,
    fasBolt,
    fasToolbox,
    fasStar,
    fasEnvelope,
    fasPhone,
    fasLocationDot
  );
}
