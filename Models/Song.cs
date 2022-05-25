using System.Collections.Generic;

namespace CoastalSongChoiceApp.Models
{
    public class Song
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Artist { get; set; }
        public List<SongList> SongLists { get; set; }
    }
}