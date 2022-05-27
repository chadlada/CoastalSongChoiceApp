using System.Collections.Generic;

namespace CoastalSongChoiceApp.Models
{
    public class SongList
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public int SongId { get; set; }
        public Song Song { get; set; }
        public User User { get; set; }
        
        
        // public List<Song> Songs { get; set; }
    }
}