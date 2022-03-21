const downloads = [
  {
    version: "v1.0.0",
    date: "2022/04/30",
    size: "5.4KB",
    links: {
      windows_amd64: "",
      linux_amd64: "",
      linux_arm64: "",
      darwin_amd64: "",
      darwin_arm64: "",
      freebsd_amd64: ""
    }
  }
]

export default () => {
  const latest = downloads[0]
  const latestLinks = latest.links
  return <section class="page-center">
    <h1>
      Command Line Interface
      <div class="h1-sub">Download Dero & Dragons CLI for your platform and start minting cards.</div>
    </h1>
    <h2>Latest version</h2>
    <div class="tag">Version: {latest.version} | Date: {latest.date} | Size: {latest.size}</div>
    <div class="cli-buttons">
      <a class="cli-download-windows" href={latestLinks["windows_amd64"]}>
        <div class="icon-windows" />
        Windows
      </a>
      <a class="cli-download-linux" href={latestLinks["linux_amd64"]}>
        <div class="icon-linux" />
        Linux
      </a>
      <a class="cli-download-apple" href={latestLinks["darwin_amd64"]}>
        <div class="icon-apple" />
        Apple
      </a>
      <a class="cli-download-freebsd" href={latestLinks["freebsd_amd64"]}>
        <div class="icon-freebsd" />
        Freebsd
      </a>
    </div>
    <h2>Previous versions</h2>
    <div class="table-overflow">
      <table>
        <thead>
          <tr>
            <th>Version</th>
            <th>Date</th>
            <th>Size</th>
            <th>Download links</th>
          </tr>
        </thead>
        <tbody>
          {downloads.map((download) => {
            const { version, date, size, links } = download
            return <tr>
              <td>{version}</td>
              <td>{date}</td>
              <td>{size}</td>
              <td>
                {Object.keys(links).map(key => {
                  return <><a href="">{key}</a>&nbsp;&nbsp;</>
                })}
              </td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  </section>
}
