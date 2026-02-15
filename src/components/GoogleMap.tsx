export default function GoogleMap() {
  return (
    <div className="embed-map-responsive">
      <div className="embed-map-container">
        <iframe
          className="embed-map-frame"
          frameBorder={0}
          scrolling="no"
          marginHeight={0}
          marginWidth={0}
          src="https://maps.google.com/maps?width=600&height=400&hl=en&q=31%20LO%20Krak%C3%B3w&t=&z=14&ie=UTF8&iwloc=B&output=embed"
        />
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html:
            '.embed-map-responsive{position:relative;text-align:right;width:100%;height:0;padding-bottom:66.66666666666666%;}.embed-map-container{overflow:hidden;background:none!important;width:100%;height:100%;position:absolute;top:0;left:0;}.embed-map-frame{width:100%!important;height:100%!important;position:absolute;top:0;left:0;}',
        }}
      />
    </div>
  );
}
