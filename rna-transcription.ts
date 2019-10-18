class Transcriptor {
  private transcription: { [k: string]: string } = {
    C: 'G',
    G: 'C',
    A: 'U',
    T: 'A'
  }

  private error() {
    throw new Error('Invalid input DNA.')
  }

  toRna( dna: string ): string {
    return dna
      .split('')
      .map(nucleotide => this.transcription[nucleotide] || this.error())
      .join('')
  }
}

export default Transcriptor