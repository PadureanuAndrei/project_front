export interface Announcement {
  id: number;

  title: string;
  description: string;
  address: string;
  hourPrice: number;

  publisher: number;
  photos: string[];
}


export interface CreateAnnouncement {
  title: string;
  description: string;
  address: string;
  hourPrice: number;

  photos: string[];
}

export interface AnnouncementSearchCriteria {
  criteria?: string;
  city?: string;
}
